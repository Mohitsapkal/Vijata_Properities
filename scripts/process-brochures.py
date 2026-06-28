import os
import subprocess
import glob
from PIL import Image

PROJECTS = [
    {
        "pdf": "AMPLE .pdf",
        "slug": "ample-adwayam-residency",
        "is_portrait": False,
    },
    {
        "pdf": "Hindustan Residency Brochure.pdf",
        "slug": "hindustan-residency",
        "is_portrait": True,
    },
    {
        "pdf": "V C ORA BROCHURE.pdf",
        "slug": "vc-ora-park",
        "is_portrait": False,
    }
]

PUBLIC_DIR = "/home/mohit-sapkal/Desktop/Vijata_Properities/public"
BROCHURE_DIR = os.path.join(PUBLIC_DIR, "brochure")
EXTRACTED_DIR = os.path.join(PUBLIC_DIR, "extracted")

def process_project(proj):
    pdf_path = os.path.join(BROCHURE_DIR, proj["pdf"])
    if not os.path.exists(pdf_path):
        print(f"Error: Brochure not found at {pdf_path}")
        return

    out_dir = os.path.join(EXTRACTED_DIR, proj["slug"])
    os.makedirs(out_dir, exist_ok=True)
    
    print(f"\nProcessing project: {proj['slug']}...")
    
    # 1. Render PDF pages if not already done
    pages = sorted(glob.glob(os.path.join(out_dir, "page-*.png")))
    if len(pages) < 3:
        print(f"Rendering pages of {proj['pdf']} using pdftoppm...")
        try:
            cmd = ["pdftoppm", "-png", "-r", "150", pdf_path, os.path.join(out_dir, "page")]
            subprocess.run(cmd, check=True)
            pages = sorted(glob.glob(os.path.join(out_dir, "page-*.png")))
            print(f"Successfully rendered {len(pages)} pages.")
        except Exception as e:
            print(f"Error rendering PDF: {e}")
            return
    else:
        print("Pages already rendered.")
        
    if len(pages) < 3:
        print(f"Error: Less than 3 pages rendered for {proj['pdf']}")
        return

    # 2. Crop assets from pages
    # page-1.png is the cover
    p1 = Image.open(pages[0])
    w1, h1 = p1.size
    
    # page-2.png is double spread (overview + layout/amenities)
    p2 = Image.open(pages[1])
    w2, h2 = p2.size
    
    # page-3.png is the back cover (details + map)
    p3 = Image.open(pages[2])
    w3, h3 = p3.size

    # Crop 1: Hero Banner (Center horizontal banner of Page 1)
    # Target height ratio: 0.6
    hero_box = (0, int(h1 * 0.15), w1, int(h1 * 0.75))
    hero = p1.crop(hero_box)
    hero.save(os.path.join(out_dir, "hero.png"))
    print("Saved hero.png")

    # Crop 2: Master Plan (Right half of the double-spread Page 2)
    # For double spread, width is twice normal page.
    # In portrait double-spread (Hindustan), it might be vertical spread.
    # Let's handle landscape vs portrait double-spread.
    if proj["is_portrait"]:
        # Vertical double spread or horizontal. Let's assume horizontal double-spread.
        # Right half contains the plan
        plan_box = (int(w2 * 0.5), 0, w2, h2)
        amenities_box = (0, 0, int(w2 * 0.5), h2)
    else:
        plan_box = (int(w2 * 0.5), 0, w2, h2)
        amenities_box = (0, 0, int(w2 * 0.5), h2)

    plan = p2.crop(plan_box)
    plan.save(os.path.join(out_dir, "master-plan.png"))
    print("Saved master-plan.png")

    # Crop 3: Amenities Map
    amenities = p2.crop(amenities_box)
    amenities.save(os.path.join(out_dir, "amenities-map.png"))
    print("Saved amenities-map.png")

    # Crop 4: Location Map (Lower part of Page 3)
    map_box = (0, int(h3 * 0.4), w3, h3)
    loc_map = p3.crop(map_box)
    loc_map.save(os.path.join(out_dir, "location-map.png"))
    print("Saved location-map.png")

    # Crop 5-8: Gallery Sub-images (Playground, Temple, Roads, Entry Gate)
    # We crop these from page 2 and page 3 elements to have mock assets
    crop_size = min(w1, h1) // 3
    
    # Gate crop from Page 1 bottom right
    gate_box = (w1 - crop_size, h1 - crop_size, w1, h1)
    p1.crop(gate_box).save(os.path.join(out_dir, "gate.png"))
    
    # Playground crop from Page 2 center bottom
    play_box = (int(w2*0.25) - crop_size//2, h2 - crop_size, int(w2*0.25) + crop_size//2, h2)
    p2.crop(play_box).save(os.path.join(out_dir, "playground.png"))
    
    # Temple crop from Page 2 right center
    temple_box = (int(w2*0.75) - crop_size//2, int(h2*0.5) - crop_size//2, int(w2*0.75) + crop_size//2, int(h2*0.5) + crop_size//2)
    p2.crop(temple_box).save(os.path.join(out_dir, "temple.png"))

    # Roads crop from Page 3 top left
    roads_box = (0, 0, crop_size, crop_size)
    p3.crop(roads_box).save(os.path.join(out_dir, "roads.png"))

    print("Saved gallery assets (gate, playground, temple, roads).")

def main():
    print("Starting automatic brochure processing...")
    for proj in PROJECTS:
        process_project(proj)
    print("\nAll brochures processed successfully.")

if __name__ == "__main__":
    main()

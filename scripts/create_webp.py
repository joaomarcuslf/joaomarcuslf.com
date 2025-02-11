import os
from PIL import Image

def convert_to_webp(image_path):
    img = Image.open(image_path)

    webp_path = os.path.splitext(image_path)[0] + ".webp"

    img.save(webp_path, "WEBP")
    print(f"Converted {image_path} to {webp_path}")

def main():
    image_dir = "./public/images"

    for root, dirs, files in os.walk(image_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff')):
                image_path = os.path.join(root, file)
                convert_to_webp(image_path)

if __name__ == "__main__":
    main()

import os
from PIL import Image

def resize_image(image_path, output_path, max_width):
    img = Image.open(image_path)

    width_percent = (max_width / float(img.size[0]))
    new_height = int((float(img.size[1]) * float(width_percent)))

    resized_img = img.resize((max_width, new_height), Image.Resampling.LANCZOS)

    os.makedirs(os.path.dirname(output_path), exist_ok=True)

    resized_img.save(output_path)
    print(f"Resized {image_path} to {output_path}")

def main():
    input_dir = "./public/images/posts"
    output_dir = "./public/images/thumbnails/posts"

    max_width = 538

    for root, dirs, files in os.walk(input_dir):
        for file in files:
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif', '.tiff', '.webp')):
                image_path = os.path.join(root, file)

                relative_path = os.path.relpath(root, input_dir)
                output_subdir = os.path.join(output_dir, relative_path)

                output_path = os.path.join(output_subdir, file)

                resize_image(image_path, output_path, max_width)

if __name__ == "__main__":
    main()

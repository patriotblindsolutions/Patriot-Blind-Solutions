import re

with open("stitch.html", "r", encoding="utf-8") as f:
    html = f.read()

# Extract the body content
body_match = re.search(r'<body[^>]*>(.*?)</body>', html, re.DOTALL)
if body_match:
    content = body_match.group(1)
    
    # Basic JSX replacements
    content = content.replace('class=', 'className=')
    content = content.replace('for=', 'htmlFor=')
    content = content.replace('checked=""', 'defaultChecked={true}')
    content = content.replace('required=""', 'required={true}')
    content = content.replace('clip-rule=', 'clipRule=')
    content = content.replace('fill-rule=', 'fillRule=')
    content = content.replace('stroke-linecap=', 'strokeLinecap=')
    content = content.replace('stroke-linejoin=', 'strokeLinejoin=')
    content = content.replace('stroke-width=', 'strokeWidth=')
    
    # Close unclosed tags
    content = re.sub(r'<img([^>]+)(?<!/)>', r'<img\1/>', content)
    content = re.sub(r'<input([^>]+)(?<!/)>', r'<input\1/>', content)
    content = re.sub(r'<hr([^>]+)(?<!/)>', r'<hr\1/>', content)
    content = re.sub(r'<br([^>]*)(?<!/)>', r'<br\1/>', content)
    content = re.sub(r'<source([^>]+)(?<!/)>', r'<source\1/>', content)
    
    # Replace the Google logo link with our logo.png
    content = re.sub(r'src="https://lh3\.googleusercontent\.com/aida-public/[^"]+"', r'src="/logo.png"', content, count=1)
    # The footer logo as well
    content = re.sub(r'src="https://lh3\.googleusercontent\.com/aida-public/[^"]+"', r'src="/logo.png"', content)
    
    # Replace the industrial rack image with the flyer we moved earlier
    content = re.sub(r'src="https://lh3\.googleusercontent\.com/aida-[^"]+"', r'src="/flyer.png"', content)
    
    # Replace remaining googleusercontent links for background
    content = re.sub(r'src="https://lh3\.googleusercontent\.com/aida-public/[^"]+"', r'src="/flyer.png"', content)

    # Some images might have an error so let's just make sure
    
    jsx = f'''import Image from "next/image";
import Link from "next/link";

export default function Home() {{
  return (
    <>
      {content}
    </>
  );
}}
'''
    with open("src/app/page.tsx", "w", encoding="utf-8") as out:
        out.write(jsx)
        print("Successfully wrote page.tsx")
else:
    print("Could not find body tag")

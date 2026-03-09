import sys
import subprocess

try:
    from playwright.sync_api import sync_playwright
except ImportError:
    subprocess.check_call([sys.executable, "-m", "pip", "install", "playwright"])
    subprocess.check_call([sys.executable, "-m", "playwright", "install", "chromium"])
    from playwright.sync_api import sync_playwright

def capture(url, output):
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        page.goto(url, wait_until='networkidle', timeout=30000)
        page.screenshot(path=output)
        browser.close()

if __name__ == "__main__":
    capture(sys.argv[1], sys.argv[2])

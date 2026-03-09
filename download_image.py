import urllib.request
import sys

url = sys.argv[1]
output_path = sys.argv[2]

try:
    urllib.request.urlretrieve(url, output_path)
    print(f"Successfully downloaded {output_path}")
except Exception as e:
    print(f"Error downloading: {e}")

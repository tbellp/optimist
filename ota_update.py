# You have to specify user with your GitHub username, repo, and files that you want to keep synchronized.
import senko
import machine
import network

OTA = senko.Senko(
   user="tbellp", 
   repo="optimist", 
   files=["boot.py", "main.py"]
)

# epicpass
script(s) to facilitate getting epic pass reservations 

Step 0:
Edit the script, replacing day parameter with the target date, e.g. 12/31/2020

1. Navigate and log in to epic pass website
2. Go to "My account", "Season Passes" tab
3. Choose Buy for a Buddy -> Buddy Tickets. In popup window, click "Get Started"
4. Open Console window (right click -> inspect element, then click console)

Now you are ready to run the script
5. Paste the script into the console and hit enter (this defines initialSet()
6. Run script by typing initialSet() and hitting enter

The script will run repeatedly until the day becomes available. At this point, you still need to proceed through the following couple screens and enter your credit card information. In some cases, the ticket will be snatched up before you can purchases it. So it may take a few tries.

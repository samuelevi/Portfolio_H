# The description added below brings to light a better understanding of the time of day 
# and as well what the family was doing when the entire incident took place.

print("Please enter the following:\n")

# Collecting user input
adjectiva = input("time of day adjective: ")
adjective = input("adjective: ")
animal = input("animal: ")
verba = input("verb: ")
exclamation = input("exclamation: ")
verbb = input("verb: ")
verbc = input("verb: ")

print("\nYour story is:\n")


story = f"""The other day in the bright {adjectiva} afternoon, I was really in trouble. 
It all started when I saw a very {adjective} {animal} {verba} down the hallway.
"{exclamation.capitalize()}!" I yelled. But all I could think to do was to {verbb} 
over and over. Miraculously, that caused it to stop, but not before it tried 
to {verbc} right in front of my family."""

print(story)

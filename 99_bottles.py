def bottle_song(num):
	while num > 2:
		print(f"{num} bottles of beer on the wall, {num} bottles of beer.\nTake one down and pass it around, {num - 1} bottles of beer on the wall.")
		num -= 1
	print(f"2 bottles of beer on the wall, 2 bottles of beer.\nTake one down and pass it around, 1 bottle of beer on the wall.\n1 bottle of beer on the wall, 1 bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\nNo more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.")

bottle_song(99)
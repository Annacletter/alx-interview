#!/usr/bin/python3
"""
0-main
Test for the 'island_perimeter' function.
"""
# Import the 'island_perimeter' function from the '0-island_perimeter' module
island_perimeter = __import__('0-island_perimeter').island_perimeter

if __name__ == "__main__":
    # Define the grid representing the map where '1' represents land and '0' represents water
    grid = [
        [0, 0, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 0, 0, 0, 0],
        [0, 1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0, 0]
    ]
    # Calculate and print the perimeter of the island in the grid
    print(island_perimeter(grid))

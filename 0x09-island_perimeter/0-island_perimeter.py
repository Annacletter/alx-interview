#!/usr/bin/python3
"""
Island Perimeter:
    This module provides a function to calculate the perimeter of an island
    described in a grid.
"""


def island_perimeter(grid):
    """
    Calculate the perimeter of the island described in the grid.

    Args:
        grid (list of list of int): A 2D grid where 0 represents water
                                    and 1 represents land.

    Returns:
        int: The perimeter of the island.
    """
    perimeter = 0
    for i in range(len(grid)):
        for j in range(len(grid[i])):
            if grid[i][j] == 1:
                # Add 4 for each land cell
                perimeter += 4
                # Subtract 2 for each adjacent land cell on the top
                if i > 0 and grid[i-1][j] == 1:
                    perimeter -= 2
                # Subtract 2 for each adjacent land cell on the left
                if j > 0 and grid[i][j-1] == 1:
                    perimeter -= 2
    return perimeter

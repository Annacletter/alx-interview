#!/usr/bin/python3
"""
Module: Game of choosing Prime numbers
"""

def primeNumbers(n):
    """
    Return list of prime numbers between 1 and n inclusive.

    Args:
        n (int): upper boundary of range. lower boundary is always 1.

    Returns:
        list: A list of prime numbers between 1 and n inclusive.
    """
    primeNos = []
    filtered = [True] * (n + 1)
    for prime in range(2, n + 1):
        if filtered[prime]:
            primeNos.append(prime)
            for i in range(prime, n + 1, prime):
                filtered[i] = False
    return primeNos

def isWinner(x, nums):
    """
    Determines the winner of the Prime Game.

    Args:
        x (int): Number of rounds of the game.
        nums (list of int): Upper limits of the range for each round.

    Returns:
        str: Name of the winner (Maria or Ben) or None if no winner can be determined.
    """
    if x is None or nums is None or x == 0 or nums == []:
        return None
    Maria = Ben = 0
    for i in range(x):
        primeNos = primeNumbers(nums[i])
        if len(primeNos) % 2 == 0:
            Ben += 1
        else:
            Maria += 1
    if Maria > Ben:
        return 'Maria'
    elif Ben > Maria:
        return 'Ben'
    return None


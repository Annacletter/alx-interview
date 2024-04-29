#!/usr/bin/python3
"""Function that unlocks array of lists"""


def canUnlockAll(boxes):
    """Function that gets a array of lists and the content
       of a list will unlock other lists
    """

    keys = [0]
    for key in keys:
        for boxKey in boxes[key]:
            if boxKey not in keys and boxKey < len(boxes):
                keys.append(boxKey)
    if len(keys) == len(boxes):
        return True
    return False

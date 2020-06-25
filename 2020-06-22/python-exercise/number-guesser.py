######
#   This is a super-simple number guessing game built to practice some basic Python.
######

from random import randint

low = 1
hi = 10

should_stop_game = False
is_first_run = True


def show_win_msg():
    msgs = [
        "Yea buddy! You got it!",
        "Congratulations! You're a winner!",
        "Winner winner! Chicken dinner"
    ]
    msg_idx = randint(0, (len(msgs) - 1))
    print(msgs[msg_idx])


while not should_stop_game:
    if is_first_run:
        print("Let's play a guessing game!")
        input("All you have to do is to guess a number between {} and {}. (Press enter to continue...) \n".format(low,
                                                                                                                  hi))
        is_first_run = False
    else:
        input("Time to guess again... (Press enter to guess.)\n")

    print("Ready?\n")

    random_num = randint(low, hi)
    guess_str = input("What is your guess? \n")
    guess_int = 0

    try:
        guess_int = int(guess_str)
    except ValueError:
        print("Aw c'mon! You gotta put in a number.")
        continue

    if (guess_int < low) or (guess_int > hi):
        print("WTF? Please guess a number between {} and {}".format(low, hi))

    if guess_int == random_num:
        print("The number was {}, AND ya guessed {}!".format(random_num, guess_int))
        show_win_msg()
    else:
        print("The number was {}, but ya guessed {}...".format(random_num, guess_int))
        print("Better luck next time ¯\\_(ツ)_/¯\n")

    print("Would you like to play again?\n")

    play_again = input("(Y or N)\n")
    if play_again[0].upper() != "Y":  # A loose check for Y
        should_stop_game = True

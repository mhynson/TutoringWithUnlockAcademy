''' 
  An explanation of if, elif, and else
'''

did_user_enter_valid_month = False

while not(did_user_enter_valid_month):
  birth_month = input("What month were you born? Please enter in a number to rep your month\n")
  if birth_month == "1":
    print("you were born in January")
    did_user_enter_valid_month = True
  elif birth_month == "2":
    print("you were born in Feb")
    did_user_enter_valid_month = True
  elif birth_month == "3":
    print("you were born in Mar")
    did_user_enter_valid_month = True
  elif birth_month == "4":
    print("you were born in Apr")
    did_user_enter_valid_month = True
  elif birth_month == "5":
    print("you were born in May")
    did_user_enter_valid_month = True
  elif birth_month == "6":
    print("you were born in June")
    did_user_enter_valid_month = True
  elif birth_month == "7":
    print("you were born in July")
    did_user_enter_valid_month = True
  elif birth_month == "8":
    print("you were born in Aug")
    did_user_enter_valid_month = True
  elif birth_month == "9":
    print("you were born in Sep")
    did_user_enter_valid_month = True
  elif birth_month == "10":
    print("you were born in Oct")
    did_user_enter_valid_month = True
  elif birth_month == "11":
    print("you were born in Nov")
    did_user_enter_valid_month = True
  elif birth_month == "12":
    print("you were born in Dec")
    did_user_enter_valid_month = True
  else:
    print("Please enter in a valid month between 1 and 12")
    did_user_enter_valid_month = False


print("Thank you for your input!")
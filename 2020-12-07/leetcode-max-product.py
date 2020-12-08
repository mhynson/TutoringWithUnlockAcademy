nums = [0, 99, 1, 2]

def maxProduct (nums = []):
  print(nums)

  '''
  The goal is to figure out what the largest product will be for all numbers in the array
  '''

  sorted_nums_array = sorted(nums, reverse=True)

  largest_number = sorted_nums_array[0]
  second_largest_number = sorted_nums_array[1]

  maximum_product = (largest_number - 1) * (second_largest_number - 1)
  return maximum_product




print( maxProduct(nums) )
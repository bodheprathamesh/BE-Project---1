import random
import faker

# Initialize the faker generator
fake = faker.Faker()

# Create an empty list to store distinct names
distinct_names = set()

# Generate distinct names
while len(distinct_names) < 1000:
    first_name = fake.first_name()
    last_name = fake.last_name()
    full_name = f"{first_name} {last_name}"
    distinct_names.add(full_name)

# Convert the set to a list
distinct_names_list = list(distinct_names)

# If you want to shuffle the list
random.shuffle(distinct_names_list)

# Print the first 10 names as an example
# print(distinct_names_list[:10])


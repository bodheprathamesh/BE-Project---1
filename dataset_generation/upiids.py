import random
import string

def generate_upi_id():
    # Generating a random identifier
    identifier = ''.join(random.choices(string.ascii_letters + string.digits, k=8))

    # List of common UPI providers
    providers = ['googlepay', 'phonepe', 'paytm', 'amazonpay', 'bhim', 'icici']

    # Selecting a random provider
    provider = random.choice(providers)

    # Constructing the UPI ID
    upi_id = f"{identifier}@{provider}"
    return upi_id

# Generating 5 sample UPI IDs
sample_upi_ids = [generate_upi_id() for _ in range(5)]
print(sample_upi_ids)
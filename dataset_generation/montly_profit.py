import random
import math

# Generating simulated monthly sales for a small business over a year
months = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
]


def genrate():

    base_sales = random.randint(2000,20000)  # Base normal monthly sales amount

    # Simulating sales for each month with specific rises randomly chosen

    # Introducing rises for specific months
    rise_months_start = random.randint(1,12) 
    rise_months_end = random.randint(rise_months_start,12)  
    rise_factor = random.uniform(1.5,3)

    # Generating simulated sales data with randomness
    sales_data = []
    for i in range (1,13):
        sales_amount = base_sales

        # Introduce rise for selected months
        if rise_months_start <= i and i<= rise_months_end :
            sales_amount *= rise_factor

        # Add randomness to the sales within a range
        random_variation = random.uniform(-0.3, 0.3)  # Introducing randomness between -10% to +10%
        sales_amount *= (1 + random_variation)

        sales_data.append(round(sales_amount, 2))

    a,b = laon_amount_genrate(base_sales)
    c,d,e = loan_amount_application_month(rise_months_start,rise_months_end)

    sales_data.append(a)
    sales_data.append(b)
    sales_data.append(c)
    sales_data.append(d)
    sales_data.append(e)
    
    return sales_data


def laon_amount_genrate(base_sales):

    loan_amount_factor = random.uniform(2,3)

    loan_amount = base_sales*loan_amount_factor

    loan_term_random_factor = random.uniform(1,5)

    loan_term = math.ceil((loan_amount / base_sales) * loan_term_random_factor)

    return loan_amount,loan_term



def loan_amount_application_month(start_month,end_month):

    peak_season = random.randint(0,1)
    months_before_season = 0
    months_left_in_peak_season = end_month-start_month
    if (peak_season):
        application_month = random.randint(start_month,end_month)
        months_left_in_peak_season = end_month-application_month
    else:
        application_month = random.randint(1,12)
        months_before_season = random.randint(1,3)
    
    return peak_season,months_before_season,months_left_in_peak_season,
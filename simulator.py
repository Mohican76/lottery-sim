import random

def generate_numbers():
    return [random.randint(1, 69) for _ in range(6)]

def calculate_ev(ticket_cost, jackpot, odds):
    return (jackpot * odds) - ticket_cost

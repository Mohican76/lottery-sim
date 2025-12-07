import pytest
from simulator import generate_numbers, calculate_ev

def test_generate_numbers_length():
    numbers = generate_numbers()
    assert len(numbers) == 6

def test_generate_numbers_range():
    numbers = generate_numbers()
    assert all(1 <= n <= 69 for n in numbers)

def test_ev_calculation_numeric():
    ev = calculate_ev(ticket_cost=2, jackpot=1000000, odds=1/292000000)
    assert isinstance(ev, float)
    assert ev == pytest.approx(-1.9965753424657535, rel=1e-6)

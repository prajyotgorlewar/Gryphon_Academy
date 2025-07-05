import pytest
from main import is_prime

@pytest.mark.parametrize("num, expected", [
    (2, True), 
    (4, False), 
    (7, True), 
    (10, False),
    (13, False),
    ])

def test_is_prime(num, expected):
    assert is_prime(num) == expected
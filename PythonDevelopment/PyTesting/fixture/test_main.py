import pytest
from main import UserManager

@pytest.fixture
def user_manager():
    return UserManager()

def test_add_user(user_manager):
    assert user_manager.add_user("John", "john@example.com") == True
    assert user_manager.get_user("John") == "john@example.com"

def test_add_duplicate_user(user_manager):
    user_manager.add_user("John", "john@example.com")
    with pytest.raises(ValueError):
        user_manager.add_user("John", "john@example.com")
import pytest
from service import UserService, APIClient


def test_get_username_with_mock(mocker):
    mock_api_client = mocker.Mock(spec=APIClient) # Create mock API client


    # mock get_user_data to return a fake user
    mock_api_client.get_user_data.return_value = {"id": 1, "name": "Alice"}


    service = UserService(mock_api_client) # Inject mock API client
    result = service.get_username(1) # Call method that depends on the mock


    # Assertions
    assert result == "ALICE" # Check if processing was done correctly
    mock_api_client.get_user_data.assert_called_once_with(1) # Ensure correct API call
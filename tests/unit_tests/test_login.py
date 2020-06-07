import pytest


@pytest.mark.unit
def test_login(local_api_client_fixture):
    response = local_api_client_fixture.post("/login")
    assert response.status_code == 200

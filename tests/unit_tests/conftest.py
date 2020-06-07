import pytest

from ectroverse.api import app


@pytest.fixture()
def local_api_client_fixture():
    with app.test_client() as client:
        yield client

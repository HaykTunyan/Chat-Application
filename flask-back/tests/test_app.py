from run_development import create_app


def test_app():
    app = create_app(config_class="config.DevelopmentConfig")
    client = app.test_client()

    response = client.get("/")
    assert response.data == b"Hello guys!!!"

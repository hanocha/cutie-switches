require 'test_helper'

class SwitchesControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get switches_index_url
    assert_response :success
  end

  test "should get show" do
    get switches_show_url
    assert_response :success
  end

  test "should get update" do
    get switches_update_url
    assert_response :success
  end

  test "should get create" do
    get switches_create_url
    assert_response :success
  end

end

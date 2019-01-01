require 'test_helper'

class ConfirmationControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get confirmation_index_url
    assert_response :success
  end

  test "should get send_mail" do
    get confirmation_send_mail_url
    assert_response :success
  end

end

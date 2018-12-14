require 'test_helper'

class CctvsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @cctv = cctvs(:one)
  end

  test "should get index" do
    get cctvs_url
    assert_response :success
  end

  test "should get new" do
    get new_cctv_url
    assert_response :success
  end

  test "should create cctv" do
    assert_difference('Cctv.count') do
      post cctvs_url, params: { cctv: { category: @cctv.category, item_name: @cctv.item_name, price: @cctv.price } }
    end

    assert_redirected_to cctv_url(Cctv.last)
  end

  test "should show cctv" do
    get cctv_url(@cctv)
    assert_response :success
  end

  test "should get edit" do
    get edit_cctv_url(@cctv)
    assert_response :success
  end

  test "should update cctv" do
    patch cctv_url(@cctv), params: { cctv: { category: @cctv.category, item_name: @cctv.item_name, price: @cctv.price } }
    assert_redirected_to cctv_url(@cctv)
  end

  test "should destroy cctv" do
    assert_difference('Cctv.count', -1) do
      delete cctv_url(@cctv)
    end

    assert_redirected_to cctvs_url
  end
end

require "application_system_test_case"

class CctvsTest < ApplicationSystemTestCase
  setup do
    @cctv = cctvs(:one)
  end

  test "visiting the index" do
    visit cctvs_url
    assert_selector "h1", text: "Cctvs"
  end

  test "creating a Cctv" do
    visit cctvs_url
    click_on "New Cctv"

    fill_in "Category", with: @cctv.category
    fill_in "Item name", with: @cctv.item_name
    fill_in "Price", with: @cctv.price
    click_on "Create Cctv"

    assert_text "Cctv was successfully created"
    click_on "Back"
  end

  test "updating a Cctv" do
    visit cctvs_url
    click_on "Edit", match: :first

    fill_in "Category", with: @cctv.category
    fill_in "Item name", with: @cctv.item_name
    fill_in "Price", with: @cctv.price
    click_on "Update Cctv"

    assert_text "Cctv was successfully updated"
    click_on "Back"
  end

  test "destroying a Cctv" do
    visit cctvs_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Cctv was successfully destroyed"
  end
end

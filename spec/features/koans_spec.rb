require_relative "../spec_helper.rb"

describe "koans", js: true do
  before do
    visit '/index.html'
  end

  it "should load the first koan on pageload" do
    page.should have_content "We shall contemplate truth by testing reality, via equality"
    page.should have_selector "input.user-input"
  end

  describe "handling user input" do
    context "when the right answer has been entered" do
      it "should load a new koan" do
        fill_in "code", :with => "true\r"

        page.should have_content "To understand reality, we must compare our expectations against reality"
        page.should_not have_content "We shall contemplate truth by testing reality, via equality"
      end
    end

    context "when the wrong answer has been entered" do
      before do
        fill_in "code", :with => "false\r"
      end

      it "should do nothing" do
        page.should have_content "We shall contemplate truth by testing reality, via equality"
      end

      it "should show an error message" do
        page.should have_content "You have not yet attained enlightenment"
      end

      it "should make the input angry" do
        page.should have_selector ".code.incorrect"
      end
    end
  end
end
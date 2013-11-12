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

        page.should_not have_content "We shall contemplate truth by testing reality, via equality"
        page.should have_content "To understand reality, we must compare our expectations against reality"
      end
    end

    context "when the wrong answer has been entered" do
      it "should do nothing" do
        fill_in "code", :with => "false\r"

        page.should have_content "We shall contemplate truth by testing reality, via equality"
      end
    end
  end
end
require 'rack'
require 'capybara'
require 'capybara-webkit'
require 'capybara/dsl'
require 'capybara/session'
require 'capybara/rspec'

include Capybara::DSL

Capybara.app = Rack::File.new File.join(File.dirname(__FILE__), "..")

Capybara.default_driver = :webkit
Capybara.javascript_driver = :webkit

class SwitchesController < ApplicationController
  def index
    @switches = Switch.all
  end

  def show
  end

  def edit
  end

  def update
  end

  def new
    @switch = Switch.new
  end

  def create
    switch = Switch.create(switch_params)
    redirect_to(switch_path(switch))
  end

  private

  def switch_params
    params.require(:switch).permit(:name)
  end
end

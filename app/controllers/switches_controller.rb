class SwitchesController < ApplicationController
  def index
    @switches = Switch.all
  end

  def show
    @switch = Switch.find(params['id'])
  end

  def edit
    @switch = Switch.find(params['id'])
  end

  def update
    @switch = Switch.find(params['id'])
    @switch.update(switch_params)
    redirect_to(action: :show)
  end

  def new
    @switch = Switch.new
  end

  def create
    switch = Switch.create(switch_params)
    redirect_to switch_path(switch)
  end

  private

  def switch_params
    params.require(:switch).permit(:name, :image)
  end
end

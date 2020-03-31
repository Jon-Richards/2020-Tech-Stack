class ToolsController < ApplicationController
  http_basic_authenticate_with name: "totallyInsecure", password: "thisW@s@R@ilsRefresher", except: [
    :index,
    :show
  ]

  def index
    @tools = Tool.all
    respond_to do |format|
      format.json { render json: @tools }
    end
  end

  def show
    @tool = Tool.find(params[:id])
    respond_to do |format|
      format.json { render json: @tool }
      format.html { @tool }
    end
  end

  def create
    @tool = Tool.new(tool_params)
    @tool.save
    redirect_to @tool
  end

  def edit
    @tool = Tool.find(params[:id])
  end

  def update
    @tool = Tool.find(params[:id])
    if @tool.update(tool_params)
      redirect_to @tool
    else
      render 'edit'
    end
  end

  private

  def tool_params
    params.require(:tool).permit(
      :name,
      :icon,
      :short_description,
      :long_description
    )
  end
end

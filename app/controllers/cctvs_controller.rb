class CctvsController < ApplicationController
  before_action :set_cctv, only: [:show, :edit, :update, :destroy]

  # GET /cctvs
  # GET /cctvs.json
  def index
    @cctvs = Cctv.all
  end

  # GET /cctvs/1
  # GET /cctvs/1.json
  def show
  end

  # GET /cctvs/new
  def new
    @cctv = Cctv.new

  end

  # GET /cctvs/1/edit
  def edit
  end

  # POST /cctvs
  # POST /cctvs.json
  def create
    @cctv = Cctv.new(cctv_params)

    respond_to do |format|
      if @cctv.save
        format.html { redirect_to @cctv, notice: 'Cctv was successfully created.' }
        format.json { render :show, status: :created, location: @cctv }
      else
        format.html { render :new }
        format.json { render json: @cctv.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /cctvs/1
  # PATCH/PUT /cctvs/1.json
  def update
    respond_to do |format|
      if @cctv.update(cctv_params)
        format.html { redirect_to @cctv, notice: 'Cctv was successfully updated.' }
        format.json { render :show, status: :ok, location: @cctv }
      else
        format.html { render :edit }
        format.json { render json: @cctv.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /cctvs/1
  # DELETE /cctvs/1.json
  def destroy
    @cctv.destroy
    respond_to do |format|
      format.html { redirect_to cctvs_url, notice: 'Cctv was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cctv
      @cctv = Cctv.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def cctv_params
      params.require(:cctv).permit(:item_name, :category, :price)
    end
end

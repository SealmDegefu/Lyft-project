class ChecklistsController < ApplicationController

	def index
		checklist = Checklist.all
		render json: checklist
	end 

	def show
		checklist = Checklist.find_by(id: params[:id])
		if checklist
			render json: checklist
		else
			render json: { error: "Checklist not found" }, status: :not_found
		end 
	end 

	def create
		checklist = @current_user.checklists.create!(checklist_params)
		render json: checklist, status: :created
	end 

	def update
		checklist = Checklist.find(params[:id])
		if checklist 
			checklist.update(checklist_params)
			render json: checklist
		else
			render json: { error: "Checklist not found" }, status: :not_found
		end 
	end 

	def destroy 
		checklist = Checklist.find(params[:id])
		checklist.destroy
		head :no_content
	end

	private 

	def checklist_params
		params.permit(:title, :instructions, :due_date, :rating)
	end 

end

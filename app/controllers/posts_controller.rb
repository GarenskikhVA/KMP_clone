class PostsController < ApplicationController

	def index
		@posts = Post.all
	end

	def new 
	end

	def create 
		@post = Post.new(post_params)

		@post.save

		redirect_to @post
	end

	def show 
		@post = Post.find(params[:id])
	end

	require 'open-uri'

	def json_to_post
		newPost = JSON.parse(params[:code])

		@post = Post.new
		@post.number = newPost['number']
		@post.body = newPost['body']
		@post.rating = newPost['rating']

		@post.save

		redirect_to root_path
	end

	def inc_rating
		@post = Post.find(params[:id])

		@post.rating = @post.rating + 1

		@post.save		

		render json: {rating: @post.rating}
	end

	private

	def post_params
		params.require(:post).permit(:number, :body, :rating)
	end

	
	

end

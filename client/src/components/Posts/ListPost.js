import React, { Component } from 'react'

import AddPost from './AddPost'
import Post from './Post'
import { connect } from 'react-redux'
import { getPosts } from '../../actions/postActions'
import LoadingPosts from './LoadingPosts'


class ListPost extends Component {
	constructor (props) {
		super(props)
	}

	componentDidMount() {
		this.props.getPosts()
	}	

	render () {
		const { list, loading } = this.props 
		const items = list && list.map(el => <Post key={el._id} post={el} />)
		return (
			<div>
				<AddPost />
				<div>
				{ loading ? <LoadingPosts /> : items}
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => ({
	list: state.post.list,
	loading: state.post.loading
})

export default connect(mapStateToProps, { getPosts })(ListPost)
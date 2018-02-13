import React from 'react';

export class SearchApp extends React.Component{
	constructor(){
		super()
		this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
		if(event.target.value.length == 0){
			document.getElementsByClassName('searchList')[0].style.display = 'none';
			return;
		}
		let status = 0;
    	this.setState({search: event.target.value});
    	this.props.myResults.map((el, i) => {
    		if(el.full_name.toLowerCase().search(event.target.value)> -1){
    			status = 1;
    			document.querySelectorAll('.searchList li')[i].style.display = 'block';

    		}else{
    			document.querySelectorAll('.searchList li')[i].style.display = 'none';
    			document.getElementsByClassName('searchList')[0].style.display = 'none';
    		}
    	});
    	if(status == 1){
    		document.getElementsByClassName('searchList')[0].style.display = 'block';
    	}
  	}

	render(){
		return(
			<div className="resp">
			<div className="title-group">
				<h1>Student Profile</h1>
				<h2> Search a student to view profile </h2>
				</div>
			<div className="searchGroup">
			<form action="">
  				<input id="search" name="search" type="text" placeholder="Search a student ?"
          onChange={this.handleChange} autoComplete="off"/>
  				<input id="search_submit"value="Rechercher" type="submit" />
  			</form>
			</div>
      		</div>
		)
	}
}
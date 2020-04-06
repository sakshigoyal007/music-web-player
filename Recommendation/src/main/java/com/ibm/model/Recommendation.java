package com.ibm.model;

import org.bson.types.ObjectId;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document
public class Recommendation {
	
	@Id
	private ObjectId _id;
	private String userId;
	private String dataId;
	private Object data;
	public Recommendation() {
		super();
		// TODO Auto-generated constructor stub
	}
	
	

	public Recommendation(ObjectId _id, String userId, String dataId, Object data) {
		super();
		this._id = _id;
		this.userId = userId;
		this.dataId = dataId;
		this.data = data;
	}


	public String getDataId() {
		return dataId;
	}


	public void setDataId(String dataId) {
		this.dataId = dataId;
	}



	public String get_id() {
		return _id.toHexString();
	}


	public void set_id(ObjectId _id) {
		this._id = _id;
	}


	public Object getData() {
		return data;
	}
	public void setData(Object data) {
		this.data = data;
	}


	public String getUserId() {
		return userId;
	}


	public void setUserId(String userId) {
		this.userId = userId;
	}
	
	
	
	
}

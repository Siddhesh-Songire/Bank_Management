package com.models;

import java.sql.Date;

public class Transaction {
	
	long trans_id;
	long customer_ssn_id;
	Date trans_date;
	String mode_of_trans;
	long amount;
	String trans_type;
	long to_customer_ssn_id;
	public long getTrans_id() {
		return trans_id;
	}
	public void setTrans_id(long trans_id) {
		this.trans_id = trans_id;
	}
	public long getCustomer_ssn_id() {
		return customer_ssn_id;
	}
	public void setCustomer_ssn_id(long customer_ssn_id) {
		this.customer_ssn_id = customer_ssn_id;
	}
	public Date getTrans_date() {
		return trans_date;
	}
	public void setTrans_date(Date trans_date) {
		this.trans_date = trans_date;
	}
	public String getMode_of_trans() {
		return mode_of_trans;
	}
	public void setMode_of_trans(String mode_of_trans) {
		this.mode_of_trans = mode_of_trans;
	}
	public long getAmount() {
		return amount;
	}
	public void setAmount(long amount) {
		this.amount = amount;
	}
	public String getTrans_type() {
		return trans_type;
	}
	public void setTrans_type(String trans_type) {
		this.trans_type = trans_type;
	}
	public long getTo_customer_ssn_id() {
		return to_customer_ssn_id;
	}
	public void setTo_customer_ssn_id(long to_customer_ssn_id) {
		this.to_customer_ssn_id = to_customer_ssn_id;
	}
	
}

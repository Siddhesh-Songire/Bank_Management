package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class CustomerDao {
	
	public static boolean checkCredentials(int user_id,String password,String role)
	{
		Connection con  = ConnectionClass.getConnection();
		if(role.equals("customer"))
		{
			String sql = "select * from customer where customer_ssn_id = ? and password = ?";
			try {
				PreparedStatement pst = con.prepareStatement(sql);
				pst.setInt(1,user_id);
				pst.setString(2,password);
				ResultSet rs = pst.executeQuery();
				if(rs.next()) {
					return true;
				}
				else {
					return false;
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}
		else if (role.equals("employee")) {
			String sql = "select * from employee where employee_id = ? and password = ?";
			try {
				PreparedStatement pst = con.prepareStatement(sql);
				pst.setInt(1,user_id);
				pst.setString(2,password);
				ResultSet rs = pst.executeQuery();
				if(rs.next()) {
					return true;
				}
				else {
					return false;
				}
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
				return false;
			}
		}
		else {
			return false;
		}
		
	}

}

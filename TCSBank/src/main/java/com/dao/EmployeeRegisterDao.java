package com.dao;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

import com.bank.utils.SsnGeneratorClass;

public class EmployeeRegisterDao {
	
	public static int employeeRegistered(String first_name,
	String last_name,
	String email,
	String password,
	String address,
	long contact,
	String position) {
		int ssn = SsnGeneratorClass.generateSsn();
		Connection con  = ConnectionClass.getConnection();
		String sql = "insert into employee values(?,?,?,?,?,?,?,?)";
		try {
			PreparedStatement pst =con.prepareStatement(sql);
			pst.setInt(1,ssn);
			pst.setString(2,first_name);
			pst.setString(3,last_name);
			pst.setString(4,email);
			pst.setString(5,password);
			pst.setString(6,address);
			pst.setLong(7,contact);
			pst.setString(8,position);
			int result = pst.executeUpdate();
			return result;
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return 0;
		}
		
		
		
		
		
	}
	
	public static boolean isEmailExists(String email) {
		Connection con = ConnectionClass.getConnection();
		String sql = "select count(*) FROM employee where email = ?";
		ResultSet rs = null;
		try {
			PreparedStatement pst =con.prepareStatement(sql);
			pst.setString(1, email);
			rs=pst.executeQuery();
			
			if(rs.next()) {
				return rs.getInt(1)>0;
			}
			
		} catch (Exception e) {
			// TODO: handle exception
		}
		
		
		return false;

	}

}

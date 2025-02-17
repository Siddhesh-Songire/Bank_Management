package com.bank.utils;

import java.util.HashSet;
import java.util.Random;
import java.util.Set;

public class SsnGeneratorClass {
	private static final Set<Integer> generatedNumbers = new HashSet();
	private static final Random random = new Random();
	public static int generateSsn() {
		
		 int ssn;
	        do {
	            ssn = 1000000 + random.nextInt(9000000); // Generate a random 7-digit number
	        } while (!generatedNumbers.add(ssn)); // Add to set; repeat if not unique
	        return ssn;
	    }
	
//	public static void main(String[] args) {
//		int num  = SsnGeneratorClass.generateSsn();
//		System.out.println(num);
//	}
		
	}



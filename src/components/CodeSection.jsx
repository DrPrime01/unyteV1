import { useEffect, useState, useRef } from "react";
import Prism from "prismjs";
import "prism-themes/themes/prism-holi-theme.css";

const codeReact = `
import React, { useState } from 'react';

function Counter() {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h1>React Counter</h1>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
            <button onClick={() => setCount(count - 1)}>Decrement</button>
        </div>
    );
}

export default Counter;
`;

const codeJS = `
function fetchRandomUser() {
    fetch('https://randomuser.me/api/')
        .then(response => response.json())
        .then(data => {
            const user = data.results[0];
            console.log("Name: " + user.name.first + " " + user.name.last);
            console.log("Location: " + user.location.city + ", " + user.location.country);
            console.log("Email: " + " " + user.email);
        })
        .catch(error => console.error('Error fetching user:', error));
}

fetchRandomUser();
`;
const codeTerra = `
provider "aws" {
	region = "us-west-1"
  }
  
  resource "aws_security_group" "instance_sg" {
	name        = "instance_sg"
	description = "Security Group for EC2 instance"
  
	ingress {
	  from_port   = 22
	  to_port     = 22
	  protocol    = "tcp"
	  cidr_blocks = ["0.0.0.0/0"]
	}
  
	egress {
	  from_port   = 0
	  to_port     = 0
	  protocol    = "-1"
	  cidr_blocks = ["0.0.0.0/0"]
	}
  
	tags = {
	  Name = "instance_sg"
	}
  }
  
  resource "aws_instance" "example" {
	ami           = "ami-0c55b159cbfafe1f0"
	instance_type = "t2.micro"
	security_groups = [aws_security_group.instance_sg.name]
  
	tags = {
	  Name = "ExampleInstance"
	}
  }  
`;

const codeVue = `
<template>
  <div>
    <h1>{{ message }}</h1>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: 'Hello from Vue!'
    }
  }
}
</script>
`;

const codeAndroid = `
package com.example.helloworld

import android.os.Bundle
import androidx.appcompat.app.AppCompatActivity
import android.widget.TextView

class MainActivity : AppCompatActivity() {

    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        setContentView(R.layout.activity_main)

        val textView: TextView = findViewById(R.id.helloTextView)
        textView.text = "Hello from Android!"
    }
}
`;

const codeIos = `
import UIKit

class ViewController: UIViewController {

    override func viewDidLoad() {
        super.viewDidLoad()
        let label = UILabel(frame: CGRect(x: 0, y: 0, width: 200, height: 21))
        label.center = CGPoint(x: 160, y: 285)
        label.textAlignment = .center
        label.text = "Hello from iOS!"
        self.view.addSubview(label)
    }
}
`;

function CodeSection() {
	const [isJsActive, setIsJsActive] = useState(true);
	const [isTerraActive, setIsTerraActive] = useState(false);
	const [isReactActive, setIsReactActive] = useState(false);
	const [isVueActive, setIsVueActive] = useState(false);
	const [isAndroidActive, setIsAndroidActive] = useState(false);
	const [isIosActive, setIsIosActive] = useState(false);

	const codeRef = useRef(null);

	const handleJsClick = () => {
		setIsJsActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleTerraClick = () => {
		setIsTerraActive(true);
		setIsJsActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleReactClick = () => {
		setIsReactActive(true);
		setIsTerraActive(false);
		setIsJsActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleVueClick = () => {
		setIsVueActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsJsActive(false);
		setIsAndroidActive(false);
		setIsIosActive(false);
	};
	const handleAndroidClick = () => {
		setIsAndroidActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsJsActive(false);
		setIsIosActive(false);
	};
	const handleIosClick = () => {
		setIsIosActive(true);
		setIsTerraActive(false);
		setIsReactActive(false);
		setIsVueActive(false);
		setIsAndroidActive(false);
		setIsJsActive(false);
	};

	let activeCode, activeLanguage;
	if (isJsActive) {
		activeCode = codeJS;
		activeLanguage = "javascript";
	} else if (isReactActive) {
		activeCode = codeReact;
		activeLanguage = "javascript";
	} else if (isVueActive) {
		activeCode = codeVue;
		activeLanguage = "vue";
	} else if (isTerraActive) {
		activeCode = codeTerra;
		activeLanguage = "terraform";
	} else if (isAndroidActive) {
		activeCode = codeAndroid;
		activeLanguage = "kotlin";
	} else if (isIosActive) {
		activeCode = codeIos;
		activeLanguage = "swift";
	}

	useEffect(() => {
		if (codeRef.current) {
			Prism.highlightElement(codeRef.current);
		}
	}, [activeCode, activeLanguage]);

	return (
		<div className="h-[32.75rem] w-[21.875rem] md:w-[34.35rem]">
			<ul className="flex justify-between flex-wrap text-sm font-medium text-center text-gray-500 mb-8">
				<li className="mr-2">
					<a
						onClick={handleJsClick}
						className={` ${
							isJsActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						Javascript
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={handleTerraClick}
						className={` ${
							isTerraActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						Terraform
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={handleReactClick}
						className={` ${
							isReactActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						React
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={handleVueClick}
						className={` ${
							isVueActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						Vue
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={handleAndroidClick}
						className={` ${
							isAndroidActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						Android
					</a>
				</li>
				<li className="mr-2">
					<a
						onClick={handleIosClick}
						className={` ${
							isIosActive ? "bg-gray-800 text-[#0CD704]" : ""
						} cursor-pointer inline-block px-4 py-3 rounded-3xl hover:text-gray-300 hover:bg-gray-800`}
					>
						iOS
					</a>
				</li>
			</ul>

			<div className="Code flex flex-col h-full">
				<pre className="flex-1 overflow-auto rounded-3xl">
					<code ref={codeRef} className={`language-${activeLanguage}`}>
						{activeCode}
					</code>
				</pre>
			</div>
		</div>
	);
}

export default CodeSection;

import { Box, Button, Text, TextField, Image } from '@skynexui/components';
import appConfig from "../config.json";
import React from 'react'
import { useRouter } from 'next/router'
// import { useEffect } from 'react'
// import axios from 'axios'

function MyTitle(props) {
	const Tag = props.tag || 'h1';
	return (
		<>
			<Tag>{props.children}</Tag>
			<style jsx>{`
			  ${Tag} {
				  color: ${appConfig.theme.colors.neutrals['000']};
				  font-size: 24px;
				  font-weight: 600;
				  display: inline-block;
				  grid-area: text;
			  }
		`}</style>
		</>
	);
}

export default function HomePage() {

	// const api = axios.create({
	// 	url: 'https://api.github.com/users'
	// })

	const [username, setUsername] = React.useState('');
	const routering = useRouter()
	const [visibilityBoxs, setVisibilityBox] = React.useState('none');
	const invalidFriends = 'https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png'
	const [visible, setVisible] = React.useState('hidden')
	const [link, setLink] = React.useState(`https://github.com/${username}.png`)

	function SetInvalidUserName(props) {
		return (
			<span>
				<p>Nome de usuário inválido, não é possível buscar a foto</p>
				<style jsx>{`
					p{
						font-family: sans-serif;
						font-size: 10.5px;
						visibility: ${props.visible};
						color: red;
						margin: 2px auto;
						opacity: 80%;
					}
				`}</style>
			</span>
		)
	}

	function SmallBox(props){
		return(
		<div className='smallBox'>
			<Image src={props.image}></Image>
		<style jsx>{`
			.smallBox{
				width: 100px;
				height: 90px;
				border-radius: 20px;
				box-shadow: 0 2px 10px 0 rgba(36, 38, 66, 0.2);
				// background-color: #3F4273;
				border-left: solid 4px rgba(242, 201, 204, .7);
				border-right: solid 4px rgba(242, 201, 204, .7);
				margin-bottom: 10px;
				display: ${props.visibility};
			}
		`}</style>
		</div>
		)
	}

	return (
		<>
			<Box
				styleSheet={{
					display: 'flex', alignItems: 'center', justifyContent: 'center',
					// backgroundColor: appConfig.theme.colors.primary[500],
					backgroundImage: 'url(https://i.imgur.com/tNAIOA8.png)',
					backgroundRepeat: 'no-repeat', backgroundSize: 'auto', backgroundBlendMode: 'multiply',
				}}
			>
				<Box
					styleSheet={{
						display: 'flex',
						alignItems: 'center',
						justifyContent: 'space-between',
						flexDirection: {
							xs: 'column',
							sm: 'row',
						},
						width: '100%', maxWidth: '600px',
						borderRadius: '20px', padding: '32px', margin: '16px',
						boxShadow: '0 2px 10px 0 rgb(36, 38, 66 / 20%)',
						backgroundColor: '#3F4273',
						gridArea: 'box'
					}}
				>
					{/* Formulário */}
					<Box
						as="form"
						onSubmit={
							function clicked(event) {
								console.log('fui clicado')
								event.preventDefault()
								//mudando de página
								routering.push('/chat')
							}
						}
						styleSheet={{
							display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
							width: { xs: '100%', sm: '50%' }, textAlign: 'center', marginBottom: '32px',
						}}
					>
						<div>
							<div className='box-subtitle-title-and-img'>
								<MyTitle tag="h2">Hey Adora!</MyTitle>
								<Text variant="body3" styleSheet={{ marginBottom: '32px', color: appConfig.theme.colors.neutrals[300], display: 'inline-block', gridArea: 'text2' }}>
									{appConfig.name}
								</Text>
								<img className='img-catra' src='https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/75eafe9f-a87c-45fa-b6bb-328c9e7b76f9/deyumur-e1981004-b918-4d23-a31a-2d100890d99e.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzc1ZWFmZTlmLWE4N2MtNDVmYS1iNmJiLTMyOGM5ZTdiNzZmOVwvZGV5dW11ci1lMTk4MTAwNC1iOTE4LTRkMjMtYTMxYS0yZDEwMDg5MGQ5OWUucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.VDKWvXzTLceHc_32HT_0gfKyB2t-eiSB5A7HML04cVs' />
							</div>
						</div>

						<TextField
							fullWidth
							textFieldColors={{
								neutral: {
									textColor: appConfig.theme.colors.neutrals[200],
									mainColor: appConfig.theme.colors.neutrals[900],
									mainColorHighlight: '#F2C9CC',
									backgroundColor: '#242642',
								},
							}}
							onChange={function changeWhatItWasTyped(event) {
								const newInput = event.target.value
								if (newInput.length >= 2) {
									setUsername(newInput)
									setVisibilityBox('visible')
									setVisible('hidden')
									setLink(`https://github.com/${newInput}.png`)
									// friendsUser.map((folower) =>{
									// 	setUseFriends(
									// 		...friends,
									// 		{name: folower.login,
									// 		url: folower.html_url}
									// 	)
									// 	infoFriends.push(friends[0])
									// 	console.log(friends)
									// })
								} else {
									setUsername('')
									setVisibilityBox('hidden')
									setVisible('visible')
									setLink('https://i.pinimg.com/originals/d3/82/6a/d3826a943b0d3a9d54ec3d3cba01d0ef.png')
								}
							}
							}
						/>
						<SetInvalidUserName visible={visible}></SetInvalidUserName>
						<Button
							type='submit'
							label='Entrar'
							fullWidth
							buttonColors={{
								contrastColor: appConfig.theme.colors.neutrals["000"],
								mainColor: '#2947A3',
								mainColorLight: appConfig.theme.colors.primary[400],
								mainColorStrong: '#101D41',
							}}
							styleSheet={{
								borderRadius: '15px',
								border: 'solid 2px rgb(36, 38, 66 / 20%)'
							}}
						/>
					</Box>

					{/* Photo Area */}
					<Box
						styleSheet={{
							display: 'flex',
							flexDirection: 'column',
							alignItems: 'center',
							maxWidth: '200px',
							padding: '16px',
							backgroundColor: '#242642',
							border: '1px solid',
							borderColor: appConfig.theme.colors.neutrals[999],
							borderRadius: '20px',
							flex: 1,
							minHeight: '240px',
						}}
					>
						<a href={`https://github.com/${username}`}><Image
							styleSheet={{
								borderRadius: '50%',
								marginBottom: '16px',
							}}
							src={link}
						/></a>
						<Text
							variant="body4"
							styleSheet={{
								color: appConfig.theme.colors.neutrals[200],
								backgroundColor: '#161727',
								padding: '3px 10px',
								borderRadius: '1000px'
							}}
						>
							{username}
						</Text>
					</Box>
				</Box>
				<div styleSheet={{display:'block', maxWidth:'100px', width:'100%'}}>
					<SmallBox image={invalidFriends} visibility={visibilityBoxs}></SmallBox>
					<SmallBox image={invalidFriends} visibility={visibilityBoxs}></SmallBox>
					<SmallBox image={invalidFriends} visibility={visibilityBoxs}></SmallBox>
				</div>
		</Box>
		<style jsx>{`
			.box-subtitle-title-and-img{
				display: grid;
				grid-template-columns: 180px 100px;
				grid-template-rows: 50px 50px;
				grid-template-areas: "text img"
									"text2 img";
				align-items: center;
			}
			.img-catra{
				display: inline; 
				width: 100%; 
				max-width: 70px;
				margin-top: 20px;
			}
		`}</style>
		</>
	);
}
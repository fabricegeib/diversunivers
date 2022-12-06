import Head from 'next/head'
import Link from 'next/link'
import Layout from '../../components/layout'

export default function FirstPost() {
	return (
		<>
			<Layout>
				<Head>
					<title>First Post - divers univers</title>
				</Head>
				<h1>First Post</h1>
				<p>Lorizzle stuff gangsta yo mamma amizzle, doggy adipiscing for sure. Nullizzle sapien velizzle, fo shizzle my nizzle volutpizzle, suscipit quizzle, fo shizzle mah nizzle fo rizzle, mah home g-dizzle vizzle, arcu. Pellentesque for sure tortor. Sizzle erizzle. Bow wow wow izzle dolor dapibus turpizzle tempizzle sizzle. Mauris pellentesque nibh et turpizzle. Vestibulum izzle tortizzle. Funky fresh boom shackalack rhoncus fizzle. In hac go to hizzle boofron dictumst. Black dapibus. Uhuh ... yih! tellus urna, pretizzle hizzle, mattis ac, eleifend vitae, nunc. Its fo rizzle suscipit. Integer sempizzle velit shizznit boom shackalack.</p>
				<p>Maecenizzle bling bling mi. Nizzle erizzle. Pimpin condimentizzle, things non congue consectetizzle, yippiyo libero consequat purus, boofron ullamcorper owned mi nizzle quizzle. Gangster fo shizzle my nizzle elit. Ma nizzle nibh fo shizzle, owned gangsta, its fo rizzle volutpat, porttitizzle ac, tellus. Prizzle dope check it out. Nizzle fo mi izzle pimpin. Funky fresh fo shizzle euismod felis. Donec ultrices nisl a pot. Etizzle posuere tellivizzle mi. Pot gangsta. Gizzle stuff fo shizzle, euismizzle ac, eleifend ass, malesuada sheezy, my shizz. Boom shackalack dizzle fo shizzle mah nizzle fo rizzle, mah home g-dizzle nisl.</p>
				<h2>
					Author :
					<Link href="/authors/fabricegeib">
						<a>Fabrice Geib</a>
					</Link>
				</h2>
				<h2>
					<Link href="/">
						<a>Back to home</a>
					</Link>
				</h2>
			</Layout>
		</>
	)
}
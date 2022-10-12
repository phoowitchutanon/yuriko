import { Field, ObjectType, ID, Int, Float } from '@nestjs/graphql'

@ObjectType()
export class ServerStatus {
	@Field(() => Int)
	users: number

	@Field(() => Int)
	threads: number

	@Field(() => Int)
	tags: number

	@Field(() => Int)
	releases: number

	@Field(() => Int)
	producers: number

	@Field(() => Int)
	chars: number

	@Field(() => Int)
	posts: number

	@Field(() => Int)
	vn: number

	@Field(() => Int)
	traits: number
}

@ObjectType()
class Anime {
	@Field(() => ID)
	id: string

	@Field(() => Int)
	animeId: number

	@Field(() => Int, { nullable: true })
	ann_id?: number

	@Field(() => String, { nullable: true })
	nfo_id?: string

	@Field(() => String, { nullable: true })
	title_romaji?: string

	@Field(() => String, { nullable: true })
	title_kanji?: string

	@Field(() => Int, { nullable: true })
	year?: number

	@Field(() => String, { nullable: true })
	type?: string
}

@ObjectType()
class Links {
	@Field(() => ID)
	id: string

	@Field(() => String, { nullable: true })
	wikipedia?: string

	@Field(() => String, { nullable: true })
	encubed?: string

	@Field(() => String, { nullable: true })
	renai?: string

	@Field(() => String, { nullable: true })
	wikidata?: string
}

@ObjectType()
class Screens {
	@Field(() => ID)
	id: string

	@Field(() => String)
	image: string

	@Field(() => Int)
	rid: number

	@Field(() => Boolean)
	nsfw: boolean

	@Field(() => Int)
	height: number

	@Field(() => Int)
	width: number
}

// @ObjectType()
// class VnRelations {}

// @ObjectType()
// class VnTags {}

@ObjectType()
class Staff {
	@Field(() => ID)
	id: string

	@Field(() => Int)
	sid: number

	@Field(() => Int)
	aid: number

	@Field()
	name: string

	@Field({ nullable: true })
	orignal?: string

	@Field()
	role: string

	@Field({ nullable: true })
	note?: string
}

@ObjectType()
class Metadata {
	@Field()
	title: string

	@Field({ nullable: true })
	original?: string

	@Field({ nullable: true })
	released?: string

	@Field(() => [String])
	languages: string[]

	@Field(() => [String])
	orig_lang: string[]

	@Field(() => [String])
	platforms: string[]

	@Field({ nullable: true })
	aliases?: string

	@Field(() => Int, { nullable: true })
	length?: number

	@Field({ nullable: true })
	description?: string

	@Field({ nullable: true })
	image?: string

	@Field(() => Boolean)
	image_nsfw: boolean

	@Field(() => Float)
	popularity: number

	@Field(() => Float)
	rating: number

	@Field(() => Int)
	votecount: number
}

@ObjectType()
export class VisualNovel {
	@Field(() => ID)
	id: string

	@Field(() => Int)
	vnId: number

	@Field(() => Metadata)
	metadata: Metadata

	@Field(() => Links)
	links: Links

	@Field(() => [Anime])
	anime: Anime[]

	// @Field(() => [VnRelations])
	// relations: VnRelations[]

	// @Field(() => [vnInfoTags])
	//   tags: vnInfoTags[]

	@Field(() => [Screens])
	screens: Screens[]

	@Field(() => [Staff])
	staff: Staff[]
}
